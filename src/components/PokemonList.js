import React from "react";
import './styles/PokemonList.css';

export default function PokemonList({ pokemon }){
    return(
    <section className="poke-list">
        {pokemon.map(p => (
            <div key={p}>{p}</div>
        ))}

    </section>
    )
}