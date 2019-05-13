import React from 'react'
import { NavLink } from 'react-router-dom'

// We render header on all pages through <Header />
const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>
);

export default Header;

// const Header = () => (
//   <header>
//     <h1>Expensify</h1>
//     <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
//     <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
//     <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
//     <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
//   </header>
// )
