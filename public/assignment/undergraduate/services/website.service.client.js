/**
 * Created by weitang on 5/25/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .factory('websiteService', websiteService);

    function websiteService() {

        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        return {
            createWebsite: createWebsite,
            findAllWebsitesForUser: findAllWebsitesForUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };

        function createWebsite(userId, website) {
            website.developerId = userId;
            websites.push(website);

            // website._id = (new Date()).getTime() + "";
            // website.created = new Date();
            // website.updated = new Date();
            // console.log("come here and" + website._id);
            // websites.push(website);
        }

        function updateWebsite(websiteId, website) {
            for (var u in websites) {
                if(websites[u]._id === websiteId) {
                    websites[u] = website;
                    return true;
                }
            }
            return false;
        }

        function deleteWebsite(websiteId) {
            var website = websites.find(function (website) {
                return website._id === websiteId;
            });
            var index = websites.indexOf(website);
            websites.splice(index, 1);
        }

        function findWebsiteById(websiteId) {
            return websites.find(function (website) {
                return website._id === websiteId;
            });
        }

        function findAllWebsitesForUser(userId) {
            var resultSet = [];
            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    console.log(userId)
                    // websites[w].created = new Date();
                    // websites[w].updated = new Date();
                    resultSet.push(websites[w]);
                }
            }
            console.log(resultSet);
            return resultSet;
        }
    }
})();
