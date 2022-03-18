import axios from "axios"
import crmApi from '@/api/crmApi'

export const state = () => ({
    token: null,
    loginMessage: '',
    employees: [],
    managers: [],
    clients: [],
    clientActions: [],
    authUser: false,
    status: false,
    notifications: [],
    historyClientsList: [],
})

export const mutations = {
    INIT_APP_DATA(state, data) {
        state.employees = data.employees
        state.managers = data.managers
    },
    ADD_NEW_EMPLOYEE(state, data){
        state.employees.unshift(data)
    },
    REMOVE_EMPLOYEE(state, id){
        state.employees = state.employees.filter(function(item) {
            return item._id !== id
        })
    },
    REMOVE_CLIENT(state, id){
        state.clients = state.clients.filter(function(item) {
            return item._id !== id
        })
        state.clientActions = state.clientActions.filter(function(item) {
            return item.userId._id !== id
        })

    },
    SET_USER_STATUS(state, data){
        state.status = data.user.status
        state.authUser = data.user
        state.notifications = data.notifications
    },
    SET_NOTIFICATIONS(state, data){
        state.notifications = data.notifications
    },
    SET_CLIENTS(state, data){
        state.clients = data.users
        state.clientActions = data.actions
    },
    SET_CLIENTS_ACTIONS(state, actions){
        state.clientActions = actions
    },
    SET_HISTORY_CLIENT_LIST(state, data){
        state.historyClientsList = data
    },
    SOCKET_refreshActions(state, data){
        state.clientActions = data.actionsAll
    }
}

export const actions = {

    test({ commit }, data) {
        commit('setAuthUser', data)
    },
    async initApp({ commit }, data) {
        crmApi.init(response => commit('INIT_APP_DATA', response))
    },
    async getClientsList({ commit }, type) {
        await crmApi.getUsers(type, response => commit('SET_CLIENTS', response))
    },

    async createEmployee({ commit }, fromData) {
        await crmApi.createUser(fromData, response => commit('ADD_NEW_EMPLOYEE', response))
    },

    async removeEmployee({ commit }, id) {
        await crmApi.deleteUser(id, resposnse => commit('REMOVE_EMPLOYEE', id))
    },

    async removeClient({ commit }, id) {
        await crmApi.deleteUser(id, resposnse => commit('REMOVE_CLIENT', id))
    },

    async editUser({ commit }, user) {
        const id = user._id
        await crmApi.updateUser(id, user, response => true)
    },

    async editUserAvatar({ commit }, data) {
        const id = data.id
        let user = {}

        await crmApi.updateUserAvatar(id, data.formData, response => {
            user = response
        })

        return user
    },

    async setUserStatus({ commit }, user) {
        const id = user._id
        await crmApi.updateUserStatus(id, user, response => commit('SET_USER_STATUS', response))
    },

    async getNotifications({ commit }) {
        crmApi.getNotifications(response => commit('SET_NOTIFICATIONS', response))
    },

    async getClientsHitoryList({ commit }, id) {
        await crmApi.getHistory(id, response => commit('SET_HISTORY_CLIENT_LIST', response))
    }
}

export const getters = {
    getToken: state => state.token,
    getLoginMessage: state => state.loginMessage,

    getEmployees: state => state.employees,
    getManagers: state => state.managers,

    getAuthUser: state => state.authUser,
    getStatus: state => state.status,
    getNotifications: state => state.notifications,
    getClients: state => state.clients,
    getHistoryClientsList: state => state.historyClientsList,
    getActions: state => state.clientActions,
}
