---
sidebar_position: 3
image: /img/cube-1873956_640.png
---

# 3 - Add Unity DGMS Shell Script to PATH

## For Unix-based Systems

1. Save the following script to `/usr/local/bin/unity`

```bash
#!/usr/bin/env bash

SETTINGS="${UNITY_SETTINGS:-$(eval "cd ~${SUDO_USER:-$USER}; pwd")/.unity}"
WORKSPACE="${UNITY_WORKSPACE:-$(pwd)}"

ARGS="-v \"$SETTINGS:/root/.unity\" -v \"$WORKSPACE:/root/workspace\""

if [[ ! -z "${UNITY_PACKAGES}" ]]; then
  ARGS="$ARGS -v \"$(eval "cd ${UNITY_PACKAGES}; pwd"):/root/packages\""
fi

if [[ ! -z "${UNITY_BINPATH}" ]]; then
  ARGS="$ARGS -v \"$(eval "cd ${UNITY_BINPATH}; pwd"):/root/bin\""
fi

if [[ ! -z "${UNITY_LIBPATH}" ]]; then
  ARGS="$ARGS -v \"$(eval "cd ${UNITY_LIBPATH}; pwd"):/root/lib\""
fi

eval "docker run -it -p 8888:8888 -p 8080:8080 $ARGS registry.gitlab.com/nachawati/unity/docker:0.0.1-SNAPSHOT $@"
```

2. Make executable

```bash
chmod +x /usr/local/bin/unity
```

## For Windows with Docker Toolbox

1. Save the following script to `C:\Windows\System32\unity.cmd`

:::info NOTE
This script is limited to the C:\ drive. If your computer has more than one drive,
make sure that the settings, workspace and packages folders are located under the C:\
drive.
:::

```bash
@ECHO OFF
@SETLOCAL

IF "%UNITY_SETTINGS%"=="" SET UNITY_SETTINGS=%HOMEDRIVE%%HOMEPATH%/.unity
IF NOT EXIST "%UNITY_SETTINGS%\" MKDIR "%UNITY_SETTINGS%"
IF "%UNITY_WORKSPACE%"=="" SET UNITY_WORKSPACE=%cd%

SET ARGS=-v "/c%UNITY_SETTINGS:~2%:/root/.unity" -v "/c%UNITY_WORKSPACE:~2%:/root/workspace"

IF NOT "%UNITY_PACKAGES%"=="" SET ARGS=%ARGS% -v "/c%UNITY_PACKAGES:~2%:/root/packages"

IF NOT "%UNITY_BINPATH%"=="" SET ARGS=%ARGS% -v "/c%UNITY_BINPATH:~2%:/root/packages"

IF NOT "%UNITY_LIBPATH%"=="" SET ARGS=%ARGS% -v "/c%UNITY_LIBPATH:~2%:/root/bin"

IF NOT "%UNITY_LIBPATH%"=="" SET ARGS=%ARGS% -v "/c%UNITY_LIBPATH:~2%:/root/lib"

docker run -it -p 8888:8888 -p 8080:8080 %ARGS:\=/% registry.gitlab.com/nachawati/unity/docker:0.0.1-SNAPSHOT %*
```

## For Windows with Docker for Windows

1. Save the following script to `C:\Windows\System32\unity.cmd`

```bash
@ECHO OFF
@SETLOCAL

IF "%UNITY_SETTINGS%"=="" SET UNITY_SETTINGS=%HOMEDRIVE%%HOMEPATH%/.unity
IF NOT EXIST "%UNITY_SETTINGS%\" MKDIR "%UNITY_SETTINGS%"
IF "%UNITY_WORKSPACE%"=="" SET UNITY_WORKSPACE=%cd%

SET ARGS=-v "%UNITY_SETTINGS:/root/.unity" -v "%UNITY_WORKSPACE%:/root/workspace"

IF NOT "%UNITY_PACKAGES%"=="" SET ARGS=%ARGS% -v "%UNITY_PACKAGES%:/root/packages"

IF NOT "%UNITY_BINPATH%"=="" SET ARGS=%ARGS% -v "%UNITY_BINPATH%:/root/packages"

IF NOT "%UNITY_LIBPATH%"=="" SET ARGS=%ARGS% -v "%UNITY_LIBPATH%:/root/bin"

IF NOT "%UNITY_LIBPATH%"=="" SET ARGS=%ARGS% -v "%UNITY_LIBPATH%:/root/lib"

docker run -it -p 8888:8888 -p 8080:8080 %ARGS% registry.gitlab.com/nachawati/unity/docker:0.0.1-SNAPSHOT %*
```