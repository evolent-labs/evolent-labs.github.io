# Getting Started (/skills)



<LinkButtons>
  <LinkButton href="https://github.com/evolent-labs/evolent_skills">
    View on GitHub
  </LinkButton>

  <LinkButton href="https://github.com/evolent-labs/evolent_skills/releases">
    View Releases
  </LinkButton>
</LinkButtons>

Evolent Skills is an advanced script for managing player skills on your FiveM server, supporting both QBCore and ESX.

## Installation [#installation]

<Steps>
  <Step>
    ### Install dependencies [#install-dependencies]

    Make sure [ox\_lib](https://github.com/CommunityOx/ox_lib) and [oxmysql](https://github.com/CommunityOx/oxmysql) are installed.
  </Step>

  <Step>
    ### Download Evolent Skills [#download-evolent-skills]

    Download a [release](https://github.com/evolent-labs/evolent_skills/releases), or clone the source code and build it yourself:

    ```bash title="Terminal"
    git clone https://github.com/evolent-labs/evolent_skills.git
    cd evolent_skills
    pnpm i
    pnpm run build
    ```
  </Step>

  <Step>
    ### Configure [#configure]

    Adjust `config.lua` to your server. Every skill has its own XP curve, maximum level, icon and colour.

    ```lua title="config.lua"
    return {
        ---@type 'qb'|'esx'
        Framework = 'qb',  -- Choose your framework

        --- @type table<string, Skill>
        Skills = {
            driving = {  -- Skill identifier
                label = 'Driving',  -- Skill label
                baseXp = 120,  -- XP needed to achieve level 2
                nextLevelMultiplier = 1.1,  -- Multiplier for each level
                maxLevel = 100,  -- Max skill level
                icon = 'fas fa-car',  -- Icon from FontAwesome
                color = '#AFC1FF'  -- Color used in the UI
            },
        }
    }
    ```
  </Step>

  <Step>
    ### Start the script [#start-the-script]

    Add `evolent_skills` to your resource list and start it.

    ```bash title="server.cfg"
    ensure evolent_skills
    ```
  </Step>
</Steps>

## Next steps [#next-steps]

<Cards>
  <Card icon="<Server />" title="Server Exports" href="/skills/Functions/Server" description="Add, remove and read skill XP and levels." />

  <Card icon="<Monitor />" title="Client Exports" href="/skills/Functions/Client" description="Read the local player's skills." />
</Cards>
