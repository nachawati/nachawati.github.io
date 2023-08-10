---
sidebar_position: 3
image: /img/JSONiq.png
---

# Step 1 – Install Zorba

After you download the Zorba 3.0 installer, start the installation process by opening the installer file (i.e. double click on it). Click through the installation screens, using the settings shown in the screenshots below:

![Zorba Installer 1](./img/zorba-installer-1.png "Zorba Installer 1")

![Zorba Installer 2](./img/zorba-installer-2.png "Zorba Installer 2")

![Zorba Installer 3](./img/zorba-installer-3.png "Zorba Installer 3")

![Zorba Installer 4](./img/zorba-installer-4.png "Zorba Installer 4")

![Zorba Installer 5](./img/zorba-installer-5.png "Zorba Installer 5")

![Zorba Installer 6](./img/zorba-installer-6.png "Zorba Installer 6")

You can test the Zorba installation by opening up a Windows command prompt and entering the following command:

```jsoniq
zorba -q 1+1
```

If Zorba is correctly installed, running this command should return the following output:

```xml
<?xml version="1.0" encoding="UTF-8"?>
2
```