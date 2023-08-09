---
sidebar_position: 4
---

# 4 - Test Installation

Run the following command:

```bash
unity
```

Expected result:

```bash
   __  __      _ __           ____  ________  ________
  / / / /___  (_) /___  __   / __ \/ ____/  |/  / ___/
 / / / / __ \/ / __/ / / /  / / / / / __/ /|_/ /\__ \
/ /_/ / / / / / /_/ /_/ /  / /_/ / /_/ / /  / /___/ /
\____/_/ /_/_/\__/\__, /  /_____/\____/_/  /_//____/
                 /____/

Usage: unity [options] [command] [command options]
  Options:
    -h, --help
      Print usage and quit
  Commands:
    console      Start console session
      Usage: console [options]
        Options:
          --help
            Print usage and quit
          -k, --kernel
            Specify kernel
            Default: zorba

    notebook      Start notebook session
      Usage: notebook [options]
        Options:
          --help
            Print usage and quit

    run      Execute local script or query
      Usage: run [options] <path or expression>
        Options:
          --help
            Print usage and quit
          -e, --engine
            <engine> : Specify analytics engine for execution
            Default: zorba
          -o, --output
            <file> : Write results to <file>
          -t, --time
            Print execution time

    settings      Manage settings
      Usage: settings [options]
        Options:
          --help
            Print usage and quit

    version      Print version information and quit
      Usage: version [options]
        Options:
          --help
            Print usage and quit
```