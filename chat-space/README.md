# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|user_id|reference|
|group_id|reference|
### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|e-mail|string|null:false, unique: true|
|group_id|reference|
### Association
- has_many :groups, throught: :group_users
- has_many :group_users
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|user_name|string|null: false|
|user_id|reference|

### Association
- has_many :users, throught: :group_users
- has_many :group_users
- has_many :messages

## group_userテーブル
Column|Type|Options|
|------|----|-------|
|user_id|reference|
|group_id|reference|
### Association
- belongs_to :group
- belongs_to :user
