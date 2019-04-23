import asar from "asar";
import os from "os";
import path from "path";
import sanitize from "sanitize-filename";
import yargs from "yargs-parser";

/*
    - Download electron zip
    - Create build dir
    - Unzip to build dir
    - Copy to staging dir
    - Remove default_app and default_app.asar from resources folder
    - Either:
    -   a) Copy in pre-built asar
    -   b) Copy from input dir
    -   c) Create new asar from input dir
    - Rename electron.exe
    - Copy any additional files to resources
    - Move everything to output dir
*/
