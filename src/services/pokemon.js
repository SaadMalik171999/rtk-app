// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const pokemonApi = createApi({
//   reducerPath: "pokemonApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),

//   endpoints: (builder) => ({
//     getPokemonbyName: builder.query({ query: (name) => `pokemon/${name}` }),
//   }),
// });

// export const { useGetPokemonByNameQuery } = pokemonApi

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
