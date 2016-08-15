var context = require.context('.', true, /\.spec\.jsx?$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
