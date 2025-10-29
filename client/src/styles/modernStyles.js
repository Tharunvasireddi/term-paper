// modernStyles.js
export const componentStyles = {
  app: {
    container: `min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800`,
    wrapper: `max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-fade-in`,
    header: `glass-effect rounded-2xl shadow-lg p-6 mb-8 flex items-center justify-between sticky top-4 z-10`,
    title: `text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text`,
    userInfo: `text-sm text-slate-600 dark:text-slate-300`,
    userName: `font-semibold text-slate-900 dark:text-white`,
    logoutBtn: `btn-danger`,
    mainContent: `animate-slide-up`,
    authContainer: `grid grid-cols-1 lg:grid-cols-2 gap-8`,
    authCard: `card p-8`,
  },

  authForm: {
    container: `space-y-8`,
    header: `text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text mb-6`,
    formGroup: `space-y-6`,
    label: `block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2`,
    inputWrapper: `relative`,
    input: `w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-500`,
    submitBtn: (loading) =>
      `w-full py-3 px-4 rounded-lg font-medium text-sm text-white transition-all duration-200 ease-in-out ${
        loading
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
      }`,
  },

  notes: {
    container: `space-y-8`,
    formCard: `bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-6`,
    formGroup: `space-y-4`,
    label: `block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2`,
    input: `w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200`,
    textarea: `w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200`,
    btnContainer: `flex justify-end gap-4`,
    cancelBtn: `px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200`,
    submitBtn: `px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0`,
    notesGrid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
    loadingState: `col-span-full flex justify-center items-center py-12`,
    loadingText: `animate-pulse text-slate-500 dark:text-slate-400`,
    emptyState: `col-span-full text-center py-12`,
    emptyText: `text-slate-500 dark:text-slate-400`,
    noteCard: `group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`,
    noteContent: `p-6`,
    noteTitle: `text-lg font-semibold text-slate-900 dark:text-white mb-2`,
    noteText: `text-slate-600 dark:text-slate-300 text-sm mb-4`,
    noteActions: `flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200`,
    editBtn: `p-2 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-200`,
    deleteBtn: `p-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-slate-700 transition-colors duration-200`,
    noteFooter: `px-6 py-4 bg-slate-50 dark:bg-slate-700/50 text-xs text-slate-500 dark:text-slate-400`,
  },
};
