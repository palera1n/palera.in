---
layout: ../../../layouts/DocsLayout.astro
title: Uninstalling palen1x (Windows)
---

# Uninstalling palen1x (Windows)

## Removing palera1n

Please select the environment type you want to remove.

<tab-container>
    <input type="radio" id="tabToggle01" name="tabs" value="1" checked />
    <label for="tabToggle01" checked="checked">Rootless</label>
    <input type="radio" id="tabToggle02" name="tabs" value="2" />
    <label for="tabToggle02">Rootful</label>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

Go to `2 Options` and press the "force revert" option.

Then, press `1 Start` will start the removal process of palera1n.

> For rootless you're not required to remove the jailbreak via CLI, you're also able to do so via the built-in loader application that is installed on your phone when initially jailbreaking. This can be achieved by pressing **"Restore System"**. If you have done this, you may ignore the bottom steps.

</MarkdownRenderer>
    </tab-content>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

Pressing `3 Switch` and choose 'Rootful', this will switch you to the rootful jailbreak environment type.

Go to `2 Options` and press the "force revert" option.

Then, press `1 Start` will start the removal process of palera1n.

</MarkdownRenderer>
    </tab-content>
</tab-container>


**Connect your device** and palera1n will attempt to put the device into recovery mode, then follow the instructions that are provided to enter DFU.

> This step is to ensure there isn't any corruption issues when attempting to enter DFU via force reset/reboot.

If all goes well, **your device should enter DFU mode and start jailbreaking with palera1n**, this is the most important step in making sure it actually works correctly.

> `A9(X) and earlier` devices have an issue where they will get stuck midway through this process in **pongoOS**. To work around this issue, you'll need to do the following:<br/><br/>1. In the terminal window, press `CTRL + C`<br/>2. Rerun the palera1n command<br/><br/>You'll need to do this every time you rejailbreak your device.

When complete, palen1x should prompt you to exit to the main menu. And then should you reboot back to your main operating system.

## Formatting your drive (removing palen1x)

### Prerequisites
- __[Rufus](https://rufus.ie/en/)__ - Software to reformat your drive to be usable again for storing your files

### Using Rufus
Connect your usb thumb drive and reformat it.