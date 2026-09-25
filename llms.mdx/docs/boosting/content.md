# Getting Started (/boosting)



<LinkButtons>
  <LinkButton href="https://evolent.dev">
    Our Store
  </LinkButton>
</LinkButtons>

Tired of the same old point A to B boosts? Yeah, us too. That’s why we built a next-level boosting system.
Our system is packed with variety, real progression, and features that actually make sense.

## Installation [#installation]

<Steps>
  <Step>
    ### Install dependencies [#install-dependencies]

    Make sure the following **required resources** are installed:

    * Any of the inventory scripts listed in [Configuration](/boosting/Config)
    * [ox\_lib](https://github.com/CommunityOx/ox_lib)
    * [oxmysql](https://github.com/CommunityOx/oxmysql)
    * [ox\_target](https://github.com/CommunityOx/ox_target)
    * [bl\_ui](https://github.com/Byte-Labs-Studio/bl_ui) (replaceable with other minigames)

    Use any supported framework: **OX**, **QBOX**, **ESX**, **QB** or **Standalone**.
  </Step>

  <Step>
    ### Download and extract [#download-and-extract]

    Download and extract the `evolent_boosting` resource from the [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) and place it inside your `resources` folder.
  </Step>

  <Step>
    ### Execute the SQL files [#execute-the-sql-files]

    Run every `.sql` file from the `sql` folder on your server's database. This sets up the tables for progression and contracts.
  </Step>

  <Step>
    ### Add the items to ox\_inventory [#add-the-items-to-ox_inventory]

    Add these entries to `ox_inventory/data/items.lua`. They open the hacking minigame and the boosting contract UI.

    ```lua title="ox_inventory/data/items.lua"
    ["ghostlink"] = {
        label = "GhostLink",
        weight = 5000,
        stack = true,
        close = true,
        client = {
            event = 'evolent_boosting:startHacking'
        }
    },
    -- add this only if you won't use the command
    ["boostingtablet"] = {
        label = "Boosting Tablet",
        weight = 5000,
        stack = true,
        close = true,
        client = {
            export = 'evolent_boosting.openTablet'
        }
    },
    ```
  </Step>

  <Step>
    ### Configure [#configure]

    Set up `config.lua` for your server (framework specific settings). Everything else is adjusted in game through the **Admin** menu. See [Configuration](/boosting/Config) for the full config.
  </Step>

  <Step>
    ### Add the ACE permissions [#add-the-ace-permissions]

    ```bash title="server.cfg"
    add_ace group.admin boosting.view allow
    add_ace group.admin boosting.manage allow
    add_ace group.admin boosting.configure allow
    ```
  </Step>

  <Step>
    ### Start the script [#start-the-script]

    Add `evolent_boosting` to your resource list. &#x2A;*Make sure it starts after all dependencies.**

    ```bash title="server.cfg"
    ensure ox_lib
    ensure oxmysql
    ensure evolent_boosting
    ```
  </Step>
</Steps>

## Next steps [#next-steps]

<Cards>
  <Card icon="<Settings2 />" title="Configuration" href="/boosting/Config" description="Framework settings and the in-game admin config." />

  <Card icon="<Route />" title="Custom Missions" href="/boosting/Missions" description="Build your own mission steps." />

  <Card icon="<Terminal />" title="Commands" href="/boosting/Commands" description="Admin and player commands." />

  <Card icon="<Code />" title="Exports" href="/boosting/Exports" description="Integrate with other resources." />
</Cards>
