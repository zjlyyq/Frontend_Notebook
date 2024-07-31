require(['./person', './say'], function(person, say) {
    console.log(person);
    console.log('Func say called:')
    say();
})