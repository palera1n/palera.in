---
layout: ../../../layouts/DocsLayout.astro
title: Installing palera1n (Linux)
---
# Installing palera1n (Linux)

This will guide you through the process of downloading the **latest** version of palera1n, and then using palera1n. If successful you should be able to jailbreak your device afterwards.

## Prerequisites
- __[Linux](/docs/reference/compatibility-chart)__ - It is recommended you use [Ubuntu](https://ubuntu.com/), [Mint](https://linuxmint.com/), or [EndeavourOS](https://endeavouros.com/) for when using palera1n on Linux. However, any other distribution should work as intended provided that you follow the rest of the instructions.

> If you are using a computer with an **AMD Ryzen CPU**, you will likely run into issues. If you do run into issues, you should use a computer with an Intel CPU.

- __[USB-A to lightning cable](/docs/reference/compatibility-chart)__ - Check the Compatibility Chart for information on what cables are recommended to use.

- __[Compatible checkm8 device](/docs/reference/compatibility-chart)__ - Check the Compatibility Chart for information on what devices are supported.

> On `A11 devices`, you must disable your passcode and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.<br/><br/>Additionally, if your device is an `A11 device on iOS 16` and you've set a passcode before, you will need to **erase all content and settings** in order to be able to jailbreak.

## Downloading palera1n

Please select your preferred download method:











<tab-container>
    <input type="radio" id="tabToggle01" name="tabs" value="1" checked />
    <label for="tabToggle01" checked="checked">Automatic</label>
    <input type="radio" id="tabToggle02" name="tabs" value="2" />
    <label for="tabToggle02">Manual</label>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

Open `Terminal.app` and copy & paste the following command. This will download palera1n to your system and let you jailbreak.

```sh
sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"
```

You can now run **palera1n** anywhere on your machine, so theres no need to re-run the previous download command when trying to re-jailbreak. Only use that command again if you're on an *outdated* version of palera1n and want to update.

## Using palera1n
To prepare palera1n for installation, you have to restart usbmuxd so palera1n is able to detect your device.

```sh
sudo systemctl stop usbmuxd
sudo usbmuxd -f -p
```

Run this command in the terminal of your choice. By default, macOS has a terminal built in so search for it using Spotlight or Launchpad.

```sh
sudo palera1n -l
```

</MarkdownRenderer>
    </tab-content>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

There are some cases where you would want to manually download palera1n, to either use an old version or just for nostalgic purposes.

<p class="markdown-warning">
It is recommended you use the automatic method if this is your first time. It is not recommended to try to troubleshoot issues when using an older version as a lot of given information will not match.
</p>

You can find the links to the raw binaries [here](https://github.com/palera1n/palera1n/releases). Make sure to tick the "Assets" to expand and see all of the files.

```sh
# Download the binary (will most likely end up in '~')
curl -LO <link to binary>
# This will give it the necessary permissions to execute
chmod +x /path/to/binary 
```
If all goes well the binary should be able to be executed now.

## Using palera1n
To prepare palera1n for installation, you have to restart usbmuxd so palera1n is able to detect your device.

```sh
sudo systemctl stop usbmuxd
sudo usbmuxd -f -p
```

Run this command in the terminal of your choice. By default, macOS has a terminal built in so search for it using Spotlight or Launchpad.

```sh
# Find the path for the binary, or drag it in the terminal
sudo /path/to/palera1n -l
```

</MarkdownRenderer>
    </tab-content>
</tab-container>

















**Connect your device** and palera1n will attempt to put the device into recovery mode, then follow the instructions that are provided to enter DFU.

> This step is to ensure there isn't any corruption issues when attempting to enter DFU via force reset/reboot.

If all goes well, **your device should enter DFU mode and start jailbreaking with palera1n**, this is the most important step in making sure it actually works correctly.

> `A9(X) and earlier` devices have an issue where they will get stuck midway through this process in **pongoOS**. To work around this issue, you'll need to do the following:<br/><br/>1. In the terminal window, press `CTRL + C`<br/>2. Rerun the palera1n command<br/><br/>You'll need to do this every time you rejailbreak your device.

| ![Terminal Window](https://github.com/palera1n/palera.in/assets/97859147/03f2338b-e870-4c23-8097-390c692c1d1f) |
|:-:|
|Example of **palera1n** being used in the terminal|

## Troubleshooting
<p class="markdown-info">
You can find troubleshooting steps <a href="/docs/troubleshoot/troubleshooting-steps">step-by-step troubleshooting help</a>, this is in case you ever encounter more issues when trying to use palera1n.
</p>

## Post Install
<p class="markdown-tip">
Post install information can be found <a href="/docs/get-started/post-install">here</a>.
</p>