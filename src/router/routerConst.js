const RouterList=[
    {
        exact:true,
        importPath:"CatchPokemons",
        path:'/show-catch-pokemon-list'
    },
    {
        exact:true,
        importPath:"PokeDetail",
        path:'/poke-detail/:id'
    },
    {
        exact:true,
        importPath:"Home",
        path:'/'
    }
]
export {RouterList}