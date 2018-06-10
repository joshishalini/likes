Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts
  root "home#index"
  post "/likes/:id/save_like", to: "likes#save_like"
end
