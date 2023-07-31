class Admin::DashboardController < ApplicationController
  http_basic_authenticate_with name: ENV["AdminUsername"], password: ENV["AdminPassword"]
  def show
  end
end
