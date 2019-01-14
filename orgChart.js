'use strict';
const orgTree = [
  {name: 'Zuckerberg', boss: null},
  {name: 'Schroepfer', boss: 'Zuckerberg'},
  {name: 'Schrage', boss: 'Zuckerberg'},
  {name: 'Sandberg', boss: 'Zuckerberg'},
  {name: 'Bosworth', boss: 'Schroepfer'},
  {name: 'Zhao', boss: 'Schroepfer'},
  {name: 'Steve', boss: 'Bosworth'},
  {name: 'Kyle', boss: 'Bosworth'},
  {name: 'Andrea', boss: 'Bosworth'},
  {name: 'Richie', boss: 'Zhao'},
  {name: 'Sofia', boss: 'Zhao'},
  {name: 'Jen', boss: 'Zhao'},
  {name: 'VanDyke', boss: 'Schrage'},
  {name: 'Swain', boss: 'Schrage'},
  {name: 'Sabrina', boss: 'VanDyke'},
  {name: 'Michelle', boss: 'VanDyke'},
  {name: 'Josh', boss: 'VanDyke'},
  {name: 'Blanch', boss: 'Swain'},
  {name: 'Tom', boss: 'Swain'},
  {name: 'Joe', boss: 'Swain'},
  {name: 'Goler', boss: 'Sandberg'},
  {name: 'Hernandez', boss: 'Sandberg'},
  {name: 'Moissinac', boss: 'Sandberg'},
  {name: 'Kelley', boss: 'Sandberg'},
  {name: 'Eddie', boss: 'Goler'},
  {name: 'Julie', boss: 'Goler'},
  {name: 'Annie', boss: 'Goler'},
  {name: 'Rowi', boss: 'Hernandez'},
  {name: 'Inga', boss: 'Hernandez'},
  {name: 'Morgan', boss: 'Hernandez'},
  {name: 'Amy', boss: 'Moissinac'},
  {name: 'Chuck', boss: 'Moissinac'},
  {name: 'Vinni', boss: 'Moissinac'},
  {name: 'Eric', boss: 'Kelley'},
  {name: 'Ana', boss: 'Kelley'},
  {name: 'Wes', boss: 'Kelley'},
];
function orgTraverssal(orgTree, boss=null, bossCount=0) {
  let chartString = '';
  const count = bossCount + 1;
  orgTree.filter(item => item.boss === boss)
    .forEach(item => {
      chartString = chartString + '\t'.repeat(bossCount) + item.name + '\n' + orgTraverssal(orgTree, item.name, count);
    });
  return chartString;  
}

console.log(orgTraverssal(orgTree));