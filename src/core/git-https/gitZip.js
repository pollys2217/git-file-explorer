import Path from 'path';
import JSZip from 'jszip';
import localforage from 'localforage';

import {
  repositoryExists,
} from './repositories';

const zipStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'zip-store',
});


// https://git.door43.org/unfoldingWord/en_ult/archive/master.zip
export async function fetchRepositoryZipFile({username, repository, branch}) {
  const repoExists = await repositoryExists({username, repository});
  if (!repoExists) {
    return null;
  }
  const uri = zipUri({username, repository, branch});
  const response = await fetch(uri);
  if (response.status === 200 || response.status === 0) {
    const zipArrayBuffer = await response.arrayBuffer(); // blob storage not supported on mobile
    await zipStore.setItem(uri, zipArrayBuffer);
    return true;
  } else {
    return false;
  }
};

export async function getFileFromZip({username, repository, path, branch}) {
  let file;
  const uri = zipUri({username, repository, branch});
  const zipBlob = await zipStore.getItem(uri);
  try {
    if (zipBlob) {
      const zip = await JSZip.loadAsync(zipBlob);
      const zipPath = Path.join(repository.toLowerCase(), path);
      file = await zip.file(zipPath).async("string");
    }
  } catch(error) {
    file = null;
  }
  return file;
};

function zipUri({username, repository, branch='master'}) {
  const zipPath = Path.join(username, repository, 'archive', `${branch}.zip`);
  const zipUri = baseURL + zipPath;
  return zipUri;
};
