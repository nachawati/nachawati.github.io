---
sidebar_position: 8
image: /img/cube-1873956_640.png
---

# 8 - Packages and Dependencies

The Unity DGMS analytics engine supports the execution of JSONiq modules organized as packages according to the CommonJS Packages specification (as implemented by NPMJS). Thus, package management is handled through npm. See https://docs.npmjs.com/getting-started/packages

## Environmental Variables

- **UNITY_WORKSPACE** – specifies the base path of the active workspace, defaults to the current working directory on the host.
- **UNITY_PACKAGES** – specifies the base path to dependent packages that are not handled by NPMJS, e.g. library packages that you are developing

## Namespace Resolution

The Unity DGMS analytics engine resolves references to JSONiq namespaces using the standard Zorba URI resolution scheme. For example, the URL `http://dgms.io/modules/test/module.jqm` will first be transformed into the following relative path: `io/dgms/modules/test/module.jqm`

See http://www.zorba.io/documentation/3.0/zorba/architecture/uriresolvers/

The relative path is then used to search all entries in the modules search path list, e.g.

- **$UNITY_WORKSPACE**/lib/io/dgms/modules/test/module.jqm
- **$UNITY_WORKSPACE**/io/dgms/modules/test/module.jqm
- **$UNITY_PACKAGES**/*{package}*/lib/io/dgms/modules/test/module.jqm
- **$UNITY_PACKAGES**/*{package}*/io/dgms/modules/test/module.jqm
- **$UNITY_PACKAGES**/*{package}*/node_modules/*{package}*/lib/io/dgms/modules/test/module.jqm
- **$UNITY_PACKAGES**/*{package}*/node_modules/*{package}*/io/dgms/modules/test/module.jqm
- **$UNITY_WORKSPACE**/node_modules/*{package}*/lib/io/dgms/modules/test/module.jqm
- **$UNITY_WORKSPACE**/node_modules/*{package}*/io/dgms/modules/test/module.jqm
