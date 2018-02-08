# Magnezone

Text focused general purpose & moderator bot written in [Discord.js](https://discord.js.org/#/).

*Because the world doesn't have enough of those.*

## Capabilities

### Commands

#### General

* `help` - Describes all commands the user has permission to use. (better than the README even).
* `ping` & `foo` - Bot responds with a message, good to check if it's functioning.
* `whois` - Outputs some details about the user.
* `serverinfo` - Outputs some details about the server.

#### Meme

* `waifuwar` & `husbandowar` - Tells the server who's the best.

#### Moderator

* `addroles` & `removeroles` - Manage a user's roles in bulk by name.
* `purge` - Deletes messages from the channel it's called in.
* `mute` - Mutes a user with a role (not just muting them in Voice Chat)
* `unmute` - Removes the mute role from them, letting them speak.
* `kick` - Kicks a user from the server.
* `ban` - Bans a user from the server.

#### Owner

* `embed` - Posts a RichEmbed to the specifications in the file.
* `reload` - Reloads the command, if anything's changed in the file.

### Todo:

**Misc**:

* flipcoin
* roll [x`d`y]
* rps [rock, paper, scissors]

**Moderator**:

* warn [user] <reason>
* warnings [user]
