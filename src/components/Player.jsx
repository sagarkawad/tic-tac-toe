import { useState } from "react";

export default function Player({
  initial_name,
  symbol,
  is_active,
  onChangeName,
}) {
  const [is_edit, set_is_edit] = useState(false);
  const [name, edit_name] = useState(initial_name);

  function is_edit_alter() {
    set_is_edit((editing) => !editing);

    if (is_edit) {
      onChangeName(symbol, name);
    }
  }

  function handleChange(e) {
    edit_name(e.target.value);
  }

  let player_details = <span className="player-name">{name}</span>;

  if (is_edit) {
    player_details = (
      <input type="text" required value={name} onChange={handleChange} />
    );
  }

  return (
    <li className={is_active ? "active" : undefined}>
      <span className="player">
        {player_details}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={is_edit_alter}>{is_edit ? "Save" : "Edit"}</button>
    </li>
  );
}
