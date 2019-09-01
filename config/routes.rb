Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :articles, except: :destroy
  resources :users, only: :show
  root 'articles#index'
end
