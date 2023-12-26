# File Metadata

This is a file metadata parser designed as a solution to FreeCodeCamp's [Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/#back-end-development-and-apis-projects).

The purpose of this API is to recieve a file and return some of it's properties &mdash; filename, mimetype and size in bytes. The client should send a POST request to `/api/fileanalyse` containing the file in a multipart form. If the data is not sent as a multipart form or the file is missing, the server responds with a 400 and a message describing the error. In any other error case, the server responds with a 500 and a message describing the error.

## Setting up locally

1. Clone the repo locally: `git clone https://github.com/biibirll/fcc-file-metadata.git`.
2. Navigate into the cloned directory: `cd fcc-file-metadata`.
3. Install the dependencies: `yarn`.
4. Watch for changes, rebuild and run: `yarn dev`.
