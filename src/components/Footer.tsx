import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full px-4 md:px-8 py-8 md:py-12 bg-bgLight">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-gray-200 pt-8 pb-32 md:pb-16">
        
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-2xl md:text-3xl text-purple-950 bg-white px-6 py-3 rounded-full border border-purple-100 shadow-sm inline-block w-fit">
            Hua Thi Ngoc Huyen
          </h4>
          <p className="text-purple-600 text-sm md:text-base font-medium tracking-wide ml-4">
            0765-829-321
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-6">
          <div className="flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/huyền-hứa-thị-ngọc-100389368" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-purple-800 bg-white px-5 py-2.5 rounded-full border border-purple-100 shadow-sm font-medium hover:bg-purple-50 hover:text-purple-950 hover:-translate-y-1 transition-all duration-300">
              LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/NgocHuyen2309" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-purple-800 bg-white px-5 py-2.5 rounded-full border border-purple-100 shadow-sm font-medium hover:bg-purple-50 hover:text-purple-950 hover:-translate-y-1 transition-all duration-300">
              GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-purple-600/70 font-medium">
            © 2026 Hua Thi Ngoc Huyen. Ho Chi Minh City, Vietnam.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
