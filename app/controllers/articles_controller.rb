class ArticlesController < ApplicationController
  def index
    @articles = [*1..20]
  end
end
