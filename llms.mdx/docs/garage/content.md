# Getting Started (/garage)



<LinkButtons>
  <LinkButton href="https://evolent.dev">
    Our Store
  </LinkButton>
</LinkButtons>

Tired of invisible parking spots and cars popping out of thin air? Yeah, us too. That’s why we built real underground garages.
Players walk up to a terminal, pick a car, and watch an animated lift bring it up from below. Everything is placed and managed in game, no config editing needed.

## Installation [#installation]

<Steps>
  <Step>
    ### Install dependencies [#install-dependencies]

    Make sure the following **required resources** are installed:

    * [ox\_lib](https://github.com/CommunityOx/ox_lib)
    * [oxmysql](https://github.com/CommunityOx/oxmysql)
    * **OneSync** enabled on your server

    These resources are **optional**:

    * [ox\_target](https://github.com/CommunityOx/ox_target) (without it, players use a key prompt at the terminal)
    * `qbx_vehiclekeys` / `qb-vehiclekeys` (keys are handed over automatically when a car is collected)

    Use any supported framework: **QBOX**, **QB**, **ESX** or **OX**. See [Frameworks](/garage/Frameworks) for what each one needs.
  </Step>

  <Step>
    ### Download and extract [#download-and-extract]

    Download and extract the `evolent_garage` resource from the [Cfx.re Portal](https://portal.cfx.re/assets/granted-assets) and place it inside your `resources` folder.

    <Callout type="warn" title="Don't rename the resource">
      The brand, the settings and the lift recovery journal are stored against the resource name. A renamed folder starts without them.
    </Callout>
  </Step>

  <Step>
    ### Database [#database]

    There are **no SQL files to run**. The script uses the vehicle table your framework already has.

    **ESX only:** the script adds a `parking` column to `owned_vehicles` on the first start. If your database user isn't allowed to alter tables, run this once yourself:

    ```sql
    ALTER TABLE owned_vehicles ADD COLUMN parking VARCHAR(80) NULL;
    ```
  </Step>

  <Step>
    ### Configure [#configure]

    Open `config.lua` and adjust it to your server. The defaults work for most servers, and nearly every value can be changed later in game through `/evgarage` > **Settings**. See [Configuration](/garage/Config) for the full breakdown.
  </Step>

  <Step>
    ### Add the ACE permission [#add-the-ace-permission]

    Give your staff access to the Garage Manager:

    ```bash title="server.cfg"
    add_ace group.admin evolent.garage.manage allow
    ```
  </Step>

  <Step>
    ### Start the script [#start-the-script]

    Add `evolent_garage` to your resource list. &#x2A;*Make sure it starts after your framework and all dependencies.**

    ```bash title="server.cfg"
    ensure ox_lib
    ensure oxmysql
    ensure ox_target
    # your framework (e.g. qbx_core + qbx_vehicles, qb-core, es_extended, ox_core)
    ensure evolent_garage
    ```
  </Step>

  <Step>
    ### Create your first garage [#create-your-first-garage]

    Join the server, type `/evgarage` and follow the [Garage Manager](/garage/Manager) guide.
  </Step>
</Steps>

## Updating [#updating]

<Callout title="Keep the data folder">
  Your garages are saved in `data/garages.json`. **Keep the `data` folder** when you replace the resource with a new version. If the file does get lost, the script restores the garages from a server side backup on the next start.
</Callout>

When a new version adds or removes files, the server has to re-read the manifest. Run both commands in your server console:

```bash title="Server console"
refresh
ensure evolent_garage
```

## Next steps [#next-steps]

<Cards>
  <Card icon="<LayoutDashboard />" title="Garage Manager" href="/garage/Manager" description="Place lifts and terminals, set access and impounds." />

  <Card icon="<Settings2 />" title="Configuration" href="/garage/Config" description="Every option, its default and its limits." />

  <Card icon="<CarFront />" title="Using Garages" href="/garage/Usage" description="How players collect and store vehicles." />

  <Card icon="<Blocks />" title="Frameworks" href="/garage/Frameworks" description="Framework support and custom bridges." />
</Cards>
