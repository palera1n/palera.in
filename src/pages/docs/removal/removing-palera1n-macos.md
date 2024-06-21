---
layout: ../../../layouts/DocsLayout.astro
title: Uninstalling palera1n (macOS)
---

# Uninstalling palera1n (macOS)
This guide will assume you have palera1n on your computer already if you've followed [installing-palera1n-macos](/docs/get-started/installing-palera1n-macos).

## Removing palera1n
Please select the environment type you want to remove.

<tab-container>
    <input type="radio" id="tabToggle01" name="tabs" value="1" checked />
    <label for="tabToggle01" checked="checked">Rootless</label>
    <input type="radio" id="tabToggle02" name="tabs" value="2" />
    <label for="tabToggle02">Rootful</label>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

Run this command in the terminal of your choice. By default, macOS has a terminal built in so search for it using Spotlight or Launchpad.

```sh
palera1n -l --force-revert
```

> For rootless you're not required to remove the jailbreak via CLI, you're also able to do so via the built-in loader application that is installed on your phone when initially jailbreaking. This can be achieved by pressing **"Restore System"**. If you have done this, you may ignore the bottom steps.

</MarkdownRenderer>
    </tab-content>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

Run this command in the terminal of your choice. By default, macOS has a terminal built in so search for it using Spotlight or Launchpad.

```sh
palera1n -f --force-revert
```

</MarkdownRenderer>
    </tab-content>
</tab-container>

**Connect your device** and palera1n will attempt to put the device into recovery mode, then follow the instructions that are provided to enter DFU.

> This step is to ensure there isn't any corruption issues when attempting to enter DFU via force reset/reboot.

If all goes well, **your device should enter DFU mode and start jailbreaking with palera1n**, this is the most important step in making sure it actually works correctly.

> `A9(X) and earlier` devices have an issue where they will get stuck midway through this process in **pongoOS**. To work around this issue, you'll need to do the following:<br/><br/>1. In the terminal window, press `CTRL + C`<br/>2. Rerun the palera1n command<br/><br/>You'll need to do this every time you rejailbreak your device.

After the entire process is complete, please reboot the device manually to finish the process of removing the jailbreak.

## Uninstalling the binary

This assumes you've used the download script to get palera1n, if you did, you can use this command to completely remove it.
```sh
sudo rm /usr/local/bin/palera1n
```

<p class="markdown-warning">
This will most likely not work if you've installed it by other means, such as using the provided debian packages in releases. So you will need to use <code>sudo apt remove palera1n</code>
</p>