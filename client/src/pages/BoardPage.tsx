export const BoardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Board de Proyecto</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Columnas del kanban */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Por Hacer</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                  <p className="text-sm text-gray-900">Tarea de ejemplo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-4">En Progreso</h3>
              <div className="space-y-3">
                {/* Tasks will go here */}
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-4">En Revisión</h3>
              <div className="space-y-3">
                {/* Tasks will go here */}
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-4">Completado</h3>
              <div className="space-y-3">
                {/* Tasks will go here */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
