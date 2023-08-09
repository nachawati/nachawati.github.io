---
sidebar_position: 5
---

# 5 - Run Local Query (Single File)

Assuming your current working directory is set to `/home/<username>/workspace`, run the following command:

```bash
unity run example.jq -o out.json >> stdout.txt
```

:::info Note
The -o flag is used to specify the file where the results are saved, the standard output redirection is needed to hide a segmentation fault message that might appear (does not appear to affect the optimization results).
:::

Listing of `/home/<username>/workspace/example.jq`:

```jsoniq
jsoniq version "1.0";

import module namespace a = "http://dgms.io/modules/analytics";

declare function local:f($input)
{
    let $x := $input.x
    let $y := $input.y
    
    return {
        cost: 10 * $x + 15 * $y,
        constraints:
            $x div 40 + $y div 30 le 40 and
            $x ge 0 and $x le 1000 and
            $y ge 0 and $y le 860
    }
};

let $input := {
    x: {"float?": null},
    y: {"float?": null}
}

return a:maximize({
    model: local:f#1,
    input: $input,
    objective: "cost",
    options: {
        solver: "minos"
    }
})

```