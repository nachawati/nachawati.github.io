---
sidebar_position: 6
image: /img/JSONiq.png
---

# Step 4 – Configure Atom Runner

At this point, if everything succeeded, you should be able to use Atom to write JSONiq queries and use the Zorba command prompt to execute them. It would be nice, however, to be able to execute JSONiq queries from within Atom. The Atom Runner package that we installed in the previous step provides that capability, but first it needs to be configured so that it knows how to run JSONiq queries.

To configure Atom Runner for JSONiq, open up the Atom configuration file (config.cson) and append the following text (space-sensitive):

```yaml
"runner":
  "extensions":
    "jq": "zorba"
```

The `config.cson` file is usually located in a hidden directory named `.atom` under the current user's directory, for example: `C:\Users\<username>\.atom\config.cson`

:::tip Tip
If Atom Runner does not appear to work, it is likely that you have a problem with spaces in the configuration file. Ensure the text in `config.cson` is space-aligned exactly as shown above.
:::