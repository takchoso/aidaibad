Rails.application.routes.draw do
  get '/' => 'home#top'
  get 'about' => 'home#about'
  get 'member' => 'home#member'
  get 'result' => 'home#result'
  get 'link' => 'home#link'
  get 'contact' => 'home#contact'
  get 'posts' => 'posts#index'
  get 'posts/:id' => 'posts#show'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
