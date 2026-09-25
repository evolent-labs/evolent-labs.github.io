# Frameworks (/garage/Frameworks)



The script talks to your framework through one **bridge file** per framework in `modules/creator/bridge/`. With `Framework = 'auto'` the bridge of the framework that is running is loaded, and the others stay inactive.

The bridge files are **not escrowed**, so you can point them at your own economy, key script or database layout.

## Supported Frameworks [#supported-frameworks]

|                           | Qbox                       | QBCore                  | ESX              | ox\_core                     |
| :------------------------ | :------------------------- | :---------------------- | :--------------- | :--------------------------- |
| **Config value**          | `qbox`                     | `qbcore`                | `esx`            | `oxcore`                     |
| **Required resources**    | `qbx_core`, `qbx_vehicles` | `qb-core`               | `es_extended`    | `ox_core`                    |
| **Vehicle table**         | `player_vehicles`          | `player_vehicles`       | `owned_vehicles` | `vehicles`                   |
| **Vehicle keys**          | `qbx_vehiclekeys`          | `qb-vehiclekeys`        | Add your own     | Built into ox\_core          |
| **Impound fee paid from** | Bank, then cash            | Bank, then cash         | Bank, then cash  | `money` item (ox\_inventory) |
| **Storage suggestions**   | `qbx_garages`              | `QBCore.Shared.Garages` | Free text        | Free text                    |
| **On duty check**         | Yes                        | Yes                     | Always on duty   | Always on duty               |

<Callout type="info">
  **ESX:** the script adds a `parking` column to `owned_vehicles` on the first start, and reads the `vehicles` table to turn the model hash back into a spawn name. A car whose model is missing from the `vehicles` table can't be spawned and stays hidden; the console tells you which plate it is.
</Callout>

<Callout type="info">
  **ox\_core:** groups are used as jobs. A player's job is the group with the highest grade.
</Callout>

## Customizing a Bridge [#customizing-a-bridge]

Open the bridge file of your framework, e.g. `modules/creator/bridge/qbox.lua`, and change the function you need. Two common examples:

<Tabs items="['Vehicle Keys (ESX)', 'Custom Economy']">
  <Tab>
    ESX has no key system of its own, so `GiveKeys` is empty. Add the call of your lock resource:

    ```lua title="modules/creator/bridge/esx.lua"
    function Bridge.GiveKeys(playerId, entity)
        local plate = GetVehicleNumberPlateText(entity)
        -- example, use the export or event of your own key script
        exports.my_vehiclekeys:GiveKey(playerId, plate)
    end
    ```
  </Tab>

  <Tab>
    `TakePayment` is used for the impound release fee. Return `true` only when the money was taken:

    ```lua title="modules/creator/bridge/qbox.lua"
    function Bridge.TakePayment(playerId, amount, reason)
        -- example, use your own banking resource
        return exports.my_banking:RemoveMoney(playerId, amount, reason) == true
    end
    ```
  </Tab>
</Tabs>

<Callout type="warn">
  **Never spawn, move or delete vehicles from a bridge.** Only `GetVehicle`, `GetVehicles` and the database updates may yield; every other function has to return straight away.
</Callout>

<Callout type="info">
  **Custom framework?** Pick the bridge that is closest to yours, set `Framework` to that name in `config.lua`, and rewrite its functions. Remove the `AssertReady` checks for resources you don't run.
</Callout>

## Bridge Reference [#bridge-reference]

Every bridge fills the global `EvolentGarageBridge` table with the functions below.

<Tabs items="['Data Types', 'Functions']">
  <Tab>
    ```lua
    ---@class BridgePlayer
    ---@field identifier string|number               -- citizenid, ESX identifier or ox charId
    ---@field job { name: string, grade: number, onDuty: boolean }

    ---@class BridgeVehicle
    ---@field id number|string                       -- vehicle row id (the plate on ESX)
    ---@field citizenid string|number                -- owner identifier
    ---@field modelName string                       -- spawn name, e.g. 'sultan'
    ---@field state 0|1                              -- 0 = out, 1 = stored
    ---@field garage string|nil                      -- storage name the vehicle is kept in
    ---@field props table                            -- ox_lib vehicle properties (plate, mods, fuelLevel, ...)
    ```
  </Tab>

  <Tab>
    ```lua
    ---@type boolean? Set to true when the vehicle id is a plate (ESX), so it is never read as a number
    Bridge.VehicleIdIsPlate = nil

    ---Throws when a required resource is not running. Called once on start.
    function Bridge.AssertReady() end

    ---@return BridgePlayer|nil
    function Bridge.GetPlayer(source) end

    ---@return boolean Used to validate the jobs added in the Garage Manager
    function Bridge.JobExists(jobName) end

    ---@return table<string, { label: string }> Storage suggestions in the Garage Manager
    function Bridge.GetGarages() end

    ---@return table<string, { name: string }> Vehicle names keyed by spawn name
    function Bridge.GetVehicleCatalog() end

    ---@return BridgeVehicle|nil
    function Bridge.GetVehicle(vehicleId) end

    ---@param garageId string|nil nil = any garage
    ---@param state 0|1
    ---@return BridgeVehicle[]
    function Bridge.GetVehicles(ownerId, garageId, state) end

    ---@return boolean true = the money was taken
    function Bridge.TakePayment(playerId, amount, reason) end

    function Bridge.GetEntityVehicleId(entity) end
    function Bridge.SetEntityVehicleId(entity, vehicleId) end
    function Bridge.GiveKeys(playerId, entity) end

    -- Database updates. Each one returns the number of affected rows
    -- (0 = another request won) and throws on a database error.
    function Bridge.ReserveVehicle(vehicleId, ownerId, garageId) end        -- stored -> out, collecting
    function Bridge.StoreVehicle(vehicleId, ownerId, garageId, props) end   -- save props, mark stored
    function Bridge.MarkVehicleOut(vehicleId, ownerId) end                 -- stored -> out
    function Bridge.RecoverLostVehicle(vehicleId, ownerId, garageId) end    -- lost (out) -> stored
    function Bridge.RestoreStoredVehicle(vehicleId, ownerId, garageId) end  -- undo a reservation
    ```
  </Tab>
</Tabs>
