if Meteor.isClient

  Template.searchBard.helpers
    string: ->
      Session.get 'string'

  Template.searchBar.events
    'click input': ->
      if typeof console != 'undefined'
        console.log 'User clicked input button'
      return

  Template.greeter.events
    'change #name': ->
      console.log 'Changing the name'
      Session.set 'name', $('#name').val()
      return
    'click input': ->
      if typeof console != 'undefined'
        console.log 'User clicked input button'
      return
