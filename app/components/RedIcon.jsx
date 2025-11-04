function RedIcon({name}) {
  return (
    <div className="flex items-center gap-3 ml-4">
      <div className="w-6 h-12 bg-red-700 rounded-lg" />
      <p className="text-red-700 text-xl font-bold">{name}</p>
    </div>
  )
}

export default RedIcon