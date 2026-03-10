import chefClaudeLogo from "../assets/images/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} />
            <h1>Chef Claude</h1>
            <button onClick={() => {
  localStorage.removeItem("chef-auth")
  window.location.reload()
}}>
Logout
</button>
        </header>
    )
}