import  {createSlice} from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState : {
        pokemon: null,
    },
    reducers:{
        setPokemon : (state, action) =>{
            state.pokemon = action.payload;
        },
        getPokemon : (state,action) =>{
            // eslint-disable-next-line no-self-assign
            state.pokemon = state.pokemon ;
        }
    }
})

export const {setPokemon, getPokemon} = pokemonSlice.actions;