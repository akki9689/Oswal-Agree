<div className="relative" 
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => handleMouseEnter('gallery')}>
            <button className="py-2 flex items-center hover:text-blue-600">
              Gallery <IoIosArrowDown className="ml-1" />
            </button>
            {activeDropdown === 'gallery' && (
              <ul className="absolute left-0 top-full mt-2 py-2 w-48 bg-white shadow-md">
                <li>
                  <NavLink to="/gallery/photos" className="block px-4 py-2 hover:bg-gray-100">Photos</NavLink>
                </li>
                <li className="relative">
                  <NavLink to="/gallery/videos" className="block px-4 py-2 hover:bg-gray-100">
                    Videos <IoIosArrowForward className="ml-1" />
                  </NavLink>
                  <ul className="absolute left-full top-0 mt-0 w-48 py-2 bg-white shadow-md">
                    <li>
                      <NavLink to="/gallery/videos/type1" className="block px-4 py-2 hover:bg-gray-100">Type 1</NavLink>
                    </li>
                    <li>
                      <NavLink to="/gallery/videos/type2" className="block px-4 py-2 hover:bg-gray-100">Type 2</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>