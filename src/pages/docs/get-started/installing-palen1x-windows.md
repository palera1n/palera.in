---
layout: ../../../layouts/DocsLayout.astro
title: Installing palen1x (Windows)
---

# Installing palen1x (Windows)

Sadly, palera1n does not have a build available for windows machines. However, theres an **alternative way** to use palera1n by booting into another operating system using a usb drive.

## Prerequisites

- __Personal Computer__ - Self explanatory.

> If you are using a computer with an **AMD Ryzen CPU**, you will likely run into issues. If you do run into issues, you should use a computer with an Intel CPU.

- __USB thumb drive__ - It is recommended that it is at least 128mb in size, as palen1x files can vary in size depending on certain releases.

- __[palen1x .iso file](https://github.com/palera1n/palen1x/releases)__ - Make sure you get the appropriate `.iso` for your computer.

- __[Balena Etcher](https://etcher.balena.io/)__ - Software to get palen1x on your USB thumb drive.

- __[USB-A to lightning cable](/docs/reference/compatibility-chart)__ - Check the Compatibility Chart for information on what cables are recommended to use.

- __[Compatible checkm8 device](/docs/reference/compatibility-chart)__ - Check the Compatibility Chart for information on what devices are supported.

> On `A11 devices`, you must disable your passcode and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.<br/><br/>Additionally, if your device is an `A11 device on iOS 16` and you've set a passcode before, you will need to **erase all content and settings** in order to be able to jailbreak.

<p class="markdown-warning">
The following guide <strong>will erase all contents inside of the thumb drive, please make sure to back up the content before proceeding either by on your computer or with another drive.</strong>
</p>

## Using Balena Etcher
Make sure you've installed Balena Etcher, and opened it.

Select your USB drive and the `palen1x.iso` file inside of the application.

| ![balena etcher](https://github.com/palera1n/palera.in/assets/97859147/448c43a8-6a45-459c-9e84-c22bc930a5e6)|
|:-:|
| Example screenshot of what balena etcher should look like, with palen1x and my usb drive selected. |

Once you've done that, press "Flash!" so the iso file is flashed to your USB drive.

## Booting palen1x
Reboot your computer and enter your BIOS settings to **disable 'Secure boot'**.

> Search your computer model or motherboard online to find the proper key to use to enter your BIOS and boot picker.

Once finished, you should be able to boot into your USB drive by selecting it in your boot picker.

## Using palen1x
When you boot palen1x you will see an interface with various options, the main one you're looking for is `1 palera1n`

| ![palen1x-main-menu](https://github.com/palera1n/palera.in/assets/97859147/c7679034-c0f4-4b0a-87ed-e49b051e62ff)|
|:-:|
| Example screenshot of what palen1x would look like, see here you would press `palera1n` |

Once you press that a new screen will appear. This screen will show the current Jailbreak Type and Arguments to use for palera1n.

| ![palen1x-palera1n-menu](https://github.com/palera1n/palera.in/assets/97859147/ee1d2f6a-f5e4-48dc-9289-1fe63de621c9)|
|:-:|
| Example screenshot of what the palera1n menu would look like. |

Pressing `1 Start` will start the jailbreak process by running palera1n.

## Using palera1n
**Connect your device** and palera1n will attempt to put the device into recovery mode, then follow the instructions that are provided to enter DFU.

> This step is to ensure there isn't any corruption issues when attempting to enter DFU via force reset/reboot.

If all goes well, **your device should enter DFU mode and start jailbreaking with palera1n**, this is the most important step in making sure it actually works correctly.

> `A9(X) and earlier` devices have an issue where they will get stuck midway through this process in **pongoOS**. To work around this issue, you'll need to do the following:<br/><br/>1. In the terminal window, press `CTRL + C`<br/>2. Rerun the palera1n command<br/><br/>You'll need to do this every time you rejailbreak your device.

When complete, palen1x should prompt you to exit to the main menu. And then should you reboot back to your main operating system.

## Troubleshooting
<p class="markdown-info">
You can find troubleshooting steps <a href="/docs/troubleshoot/troubleshooting-steps">step-by-step troubleshooting help</a>, this is in case you ever encounter more issues when trying to use palera1n.
</p>

## Post Install
<p class="markdown-tip">
Post install information can be found <a href="/docs/get-started/post-install">here</a>.
</p>