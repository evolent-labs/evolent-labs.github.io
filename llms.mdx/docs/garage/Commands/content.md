# Commands (/garage/Commands)



This page lists all available in-game commands.

## Administrator Commands [#administrator-commands]

| Command         | Usage Example | Description                                                                                                           | Permissions             |
| :-------------- | :------------ | :-------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| **`/evgarage`** | `/evgarage`   | Opens the [Garage Manager](/garage/Manager) to create, edit and delete garages, and to change the brand and settings. | `evolent.garage.manage` |

<Callout type="info">
  **Note:** The ACE permission name can be changed with `Garage.ManageAce` in `config.lua`.

  ```bash title="server.cfg"
  add_ace group.admin evolent.garage.manage allow
  ```
</Callout>

## Player Commands [#player-commands]

| Command       | Usage Example | Description                                                        | Permissions                |
| :------------ | :------------ | :----------------------------------------------------------------- | :------------------------- |
| **`/evpark`** | `/evpark`     | Shows a short reminder of how to store a vehicle at a garage lift. | Accessible to all players. |

<Callout type="warn">
  **Note:** Turning on `Debug` registers a few extra developer commands used by Evolent support to diagnose lifts. They print extra output to the console and should stay **off on a live server**.
</Callout>
