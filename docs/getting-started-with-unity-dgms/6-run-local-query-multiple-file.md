---
sidebar_position: 6
---

# 6 - Run Local Query (Multiple File)

Assuming your current working directory is set to `/home/<username>/workspace`, run the following command:

```bash
UNITY_PACKAGES=/home/<username>/packages unity run example.jq -o out.json >> stdout.txt
```

Listing of `/home/<username>/workspace/example.jq`

```bash
jsoniq version "1.0";

import module namespace a = "http://dgms.io/modules/analytics";

import module namespace m = "http://acme.com/mymodel.jqm";

let $input := a:collection("http://acme.com/mydata.json")

return a:maximize({
    model: m:model#1,
    input: $input,
    objective: "cost",
    options: {
        solver: "minos"
    }
})
```

Listing of `/home/<username>/packages/mypackage/lib/com/acme/mydata.json`

```bash
{
    "x": {"float?": null},
    "y": {"float?": null}
}
```

Listing of `/home/<username>/packages/mypackage/lib/com/acme/mymodel.jqm`

```bash
jsoniq version "1.0";

module namespace m = "http://acme.com/mymodel.jqm";

declare function m:model($input)
{
    let $x := $input.x
    let $y := $input.y
    return
    {
        cost: 10 * $x + 15 * $y,
         constraints:
            $x div 40 + $y div 30 le 40 and
            $x ge 0 and $x le 1000 and
            $y ge 0 and $y le 860
     }
};
```