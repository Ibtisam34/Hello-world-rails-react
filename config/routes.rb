Rails.application.routes.draw do
 get '/api/random_greeting', to: 'api#random_greeting'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"
end
