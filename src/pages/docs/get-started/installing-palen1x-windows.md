---
layout: ../../../layouts/DocsLayout.astro
title: Installing palen1x
---

# Installing palen1x

Sadly, palera1n does not have a build available for Windows machines. However, theres an **alternative way** to use palera1n by booting into another operating system using a USB drive.

> This guide also will work on Linux machines, and Mac machines provided you are able to boot palen1x with a USB thumb drive.

## Prerequisites

- __Personal Computer__ - Self explanatory.

> If you are using a computer with an **AMD Ryzen CPU**, you will likely run into issues. If you do run into issues, you should use a computer with an Intel CPU.

- __USB thumb drive__ - It is recommended that it is at least 128MB in size, as palen1x files can vary in size depending on certain releases.

- __[palen1x .iso file](https://github.com/palera1n/palen1x/releases)__ - Make sure you get the appropriate `.iso` for your computer.

- __[Balena Etcher](https://etcher.balena.io/)__ - Software to get palen1x on your USB thumb drive.

- __[USB-A to lightning cable](/docs/reference/compatibility-chart)__ - Check the Compatibility Chart for information on what cables are recommended to use.

- __[Compatible checkm8 device](/docs/reference/compatibility-chart)__ - Check the Compatibility Chart for information on what devices are supported.

> On `A11 devices`, you must disable your passcode and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.<br/><br/>Additionally, if your device is an `A11 device on iOS 16` and you've set a passcode before, you will need to **erase all content and settings** in order to be able to jailbreak.

<p class="markdown-warning">
The following guide <strong>will erase all contents inside of the thumb drive, please make sure to back up the content before proceeding either on your computer or with another drive.</strong>
</p>

## Using Balena Etcher
Make sure you've installed Balena Etcher, and opened it.

Select your USB drive and the `palen1x.iso` file in the application.

| ![balena etcher](https://github.com/palera1n/palera.in/assets/97859147/448c43a8-6a45-459c-9e84-c22bc930a5e6)|
|:-:|
| Example screenshot of what Balena Etcher should look like, with palen1x and my USB drive selected. |

Once you've done that, press "Flash!" so the ISO file is flashed to your USB drive.

## Booting palen1x
Reboot your computer and enter your BIOS settings to **disable 'Secure boot'**.

> Search for your computer model or motherboard online to find the proper key to use to enter your BIOS and boot picker.

Once finished, you should be able to boot into your USB drive by selecting it in your boot picker.

## Using palen1x
When you boot palen1x you will see an interface with various options, the main one you're looking for is `1 palera1n`

| ![palen1x-main-menu](https://github.com/palera1n/palera.in/assets/97859147/c7679034-c0f4-4b0a-87ed-e49b051e62ff)|
|:-:|
| Example screenshot of what palen1x would look like, see here you would press `palera1n` |

Once you press that, a new screen will appear. This screen will show the current Jailbreak Type and Arguments to use for palera1n.

## Using palera1n

Please select your preferred environment type, if this is your first time it is recommended you try **Rootless** before going up the ladder.

<tab-container>
    <input type="radio" id="tabToggle01" name="tabs" value="1" checked />
    <label for="tabToggle01" checked="checked">Rootless</label>
    <input type="radio" id="tabToggle02" name="tabs" value="2" />
    <label for="tabToggle02">Rootful</label>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

| ![palen1x-palera1n-menu](https://github.com/palera1n/palera.in/assets/97859147/ee1d2f6a-f5e4-48dc-9289-1fe63de621c9)|
|:-:|
| Example screenshot of what the palera1n menu would look like. |

Pressing `1 Start` will start the jailbreak process by running palera1n.

<p class="markdown-warning">
<strong>appleTV</strong> and <strong>Apple T2 (iBridge)</strong> does not support Rootless! Go to the Rootful tab to get started.
</p>

</MarkdownRenderer>
    </tab-content>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

| ![palen1x-palera1n-menu](https://github.com/palera1n/palera.in/assets/97859147/ee1d2f6a-f5e4-48dc-9289-1fe63de621c9)|
|:-:|
| Example screenshot of what the palera1n menu would look like. |

Pressing `3 Switch` and choosing 'Rootful' will switch you to the rootful jailbreak environment type.

<p class="markdown-warning">
Due to the limitations of the rootful environment on iOS/iPadOS 15 and above, there is a case where you're required to have a copied filesystem on your device.<br/><br/><strong>Make sure you have a significant amount of storage available on your device before proceeding.</strong>
</p>

|Arguments|Explanation|
|-|-|
|`fakeFS (-c)`|Creates the new APFS volume required for rootful. Will fail if one already exists. This flag is only supported on iOS/iPadOS.|
|`(partial) fakeFS (-B)`|Similar to `-c` but the size of the created fakefs is smaller at the expense of having unwritable parts in rarely-written paths. When jailbreaking 16 GB devices, this option must be used when setting up fakefs for rootful, as they do not have enough storage for full fakefs. This flag is only supported on iOS/iPadOS.|

Press `2 Options` and choose whatever fakeFS option you would prefer

Press `1 Start` to start creating the fakeFS.

Once that is finally finished, move on to the next steps.

<p class="markdown-warning">
<strong>appleTV</strong>  and <strong>Apple T2 (iBridge)</strong> on 18.1 and below are NOT required to have storage available for the jailbreak, this <strong>ONLY</strong> applies to devices running iOS/iPadOS 15 and higher. If you have one of these devices, please skip the above information and steps.
</p>

Press `1 Start` to start the jailbreak process.

</MarkdownRenderer>
    </tab-content>
</tab-container>


**Connect your device** and palera1n will attempt to put the device into recovery mode, then follow the instructions that are provided to enter DFU mode.

> This step is to ensure there isn't any corruption issues when attempting to enter DFU mode via force reset/reboot.

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
