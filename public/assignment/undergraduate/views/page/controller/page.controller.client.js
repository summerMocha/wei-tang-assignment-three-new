(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("EditPageController", EditPageController)
        .controller("NewPageController", NewPageController);

    function EditPageController($routeParams, $location, PageService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        function init() {
            PageService
                .findAllPagesForUser(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
            PageService
                .findPageById(model.pageId)
                .then(function (page) {
                    model.page = page;
                });
        }

        init();

        function updatePage() {
            PageService
                .updatePage(model.pageId, model.page)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/');
                });
        }

        function deletePage() {
            PageService
                .deletePage(model.pageId)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/');
                });
        }
    }

    function PageListController($routeParams, PageService) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];

        function init() {
            PageService
                .findAllPagesForUser(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }

        init();
    }

    function NewPageController($routeParams, $location, PageService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams['wid'];

        model.createPage = createPage;

        function init() {
            PageService
                .findAllPagesForUser(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }

        init();

        function createPage(name, description) {
            var newPage = {
                _id: (new Date()).getTime() + "",
                name: name,
                websiteId: model.websiteId,
                description: description
            };
            PageService
                .createPage(model.websiteId, newPage)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/');
                });
        }
    }
})();

