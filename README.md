# Project Summary
The objective of this project is to build a Cryptocurrency Coins Visualizing Application.

![page](https://user-images.githubusercontent.com/3630009/41337256-6bee23fa-6ef7-11e8-98e8-ab30422b7cb9.png)

The data is fetched from coinmarketcap.com API and displayed on a table. After loading, the application displays every coin
by its name, rank, price and change in price(%).
* Users can filter the table by inserting letter by letter, the application will then display the coins which have
the matching letters in their names. This was done by using onkeyup property.
* Users can also sort the table (asc and desc) by clicking on the table heads. By default, the data is sorted by rank in
ascending order.
* If users try to sort data while filtering, the filtered data (which is being displayed) will be sorted

# Languages used

* Html
* Css
* JavaScript
* Library: React (create-react-app)

# Getting started
Click [here](http://longnghiem.github.io/cryto-react-11) to visit the page.
Or clone the project:
```
> git clone git@github.com:longnghiem/cryto-react-11.git
> cd cryto-react-11
```
Then make sure to use branch 'master':
```
> git checkout master
> npm install
> npm start
```
# License
This project is licensed under the MIT License.
