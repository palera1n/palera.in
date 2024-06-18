---
layout: ../../../layouts/DocsLayout.astro
title: Installing palera1n (macOS)
---
# Installing palera1n (macOS)

Open `Terminal.app` and run the following command. This will download palera1n to your system and let you jailbreak.

```sh
sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"
```

Once complete, you can now run `palera1n` in your terminal to start the process.

```sh
palera1n
```

> When using palera1n, theres also other options within palera1n that you can specify to tell palera1n what to do. To view these, you can use `palera1n --help`. To view the online documentation, it can be found [here](https://cdn.nickchan.lol/palera1n/c-rewrite/releases/v2.0.0-beta.9.1/palera1n.1.html).

Connect your device and once you do palera1n will attempt to put the device into recovery mode, then follow the instructions that are provided to enter DFU. **This step is to ensure there isn't any corruption issues when attempting to enter DFU via force reset.**

> On `A11 devices`, you must disable your passcode and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.

Additionally, if your device is an `A11 device on iOS 16` and you've set a passcode before, you will need to **erase all content and settings** in order to be able to jailbreak.

Once you're in DFU, palera1n will start the process of exploiting and jailbreaking your device.

> A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:<br/><br/>1. In the terminal window, press `Control + C`<br/>2. Rerun the palera1n command<br/><br/>You'll need to do this every time you rejailbreak your device.



Once your device has booted up, it will take a few seconds for palera1n's loader app to appear. When that happens, select your preferred package manager within the application to install the necessary packages to start using the jailbreak.

and.. you're done!