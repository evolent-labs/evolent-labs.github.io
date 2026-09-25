# Getting Started (/fleamarket)



<LinkButtons>
  <LinkButton href="https://evolent.dev">
    Our Store
  </LinkButton>
</LinkButtons>

Bring your server’s economy to life with a fully interactive flea market designed for player control, variety, and real trading strategy. Whether your players are casual sellers, hardcore collectors, or hustlers looking to flip items for profit, this system creates a living marketplace where every deal matters. From rare collectibles to everyday essentials, your players decide what’s valuable. Supply, demand, and reputation shape the market, making every listing feel meaningful and every sale rewarding.

## Installation [#installation]

<Steps>
  <Step>
    ### Install dependencies [#install-dependencies]

    Make sure the following **required resources** are installed:

    * Any of the inventory scripts listed in [Configuration](/fleamarket/Config)
    * [ox\_lib](https://github.com/CommunityOx/ox_lib)
    * [oxmysql](https://github.com/CommunityOx/oxmysql)

    Use any supported framework: **OX**, **QBOX**, **ESX**, **QB** or **Standalone**.
  </Step>

  <Step>
    ### Download and extract [#download-and-extract]

    Download and extract the `evolent_fleamarket` resource from the [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) and place it inside your `resources` folder.
  </Step>

  <Step>
    ### Execute the SQL files [#execute-the-sql-files]

    Run every `.sql` file from the `sql` folder on your server's database. This sets up the tables the market needs.
  </Step>

  <Step>
    ### Configure [#configure]

    Set up `config.lua` for your server (framework, categories, subcategories, ...). See [Configuration](/fleamarket/Config) for the full config.
  </Step>

  <Step>
    ### Start the script [#start-the-script]

    Add `evolent_fleamarket` to your resource list. &#x2A;*Make sure it starts after all dependencies.**

    ```bash title="server.cfg"
    ensure ox_lib
    ensure oxmysql
    ensure evolent_fleamarket
    ```
  </Step>
</Steps>
