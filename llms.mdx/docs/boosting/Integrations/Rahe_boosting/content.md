# RAHE Boosting Migration (/boosting/Integrations/Rahe_boosting)



This guide moves existing player progression (levels, reputation and stats) from **RAHE Boosting** into the Evolent Boosting database.

<Callout type="warn" title="One-time migration">
  This is a one-time data operation that can't easily be undone. Run it while your server is **empty** or the boosting resource is **stopped**, and make a database backup first.
</Callout>

<Steps>
  <Step>
    ### Run the migration command [#run-the-migration-command]

    Start your server and run this command in the server console. It moves all existing RAHE data into the new structure.

    ```bash title="Server console"
    convertrahe
    ```
  </Step>

  <Step>
    ### Remove the migration command [#remove-the-migration-command]

    Once the data is transferred, remove the command so it can't be run again by accident. Remove or comment out line 171 in &#x2A;*`server/bridge/_main.lua`**.
  </Step>

  <Step>
    ### Adjust the levels [#adjust-the-levels]

    The new system may use a different progression formula. Balance the imported data with these values in &#x2A;*`config.lua`**:

    * `Config.BaseElo`
    * `Config.EloModifier`
  </Step>
</Steps>
