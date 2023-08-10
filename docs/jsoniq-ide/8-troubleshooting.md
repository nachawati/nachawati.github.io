---
sidebar_position: 8
image: /img/JSONiq.png
---

# Troubleshooting

- The program can't start because libiconv.dll is missing from your computer. Try reinstalling the program to fix this problem.

    - It appears that the current version of the Zorba installer does not include the `libiconv.dll` dependency, however it is in fact available as iconv.dll.

    - To resolve this issue, simply copy AND rename the `C:\Program Files (x86)\Zorba XQuery Processor 3.0.0\bin\iconv.dll` file to `C:\Program Files (x86)\Zorba XQuery Processor 3.0.0\bin\libiconv.dll`