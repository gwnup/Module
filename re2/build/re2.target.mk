# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := re2
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=re2' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D__STDC_FORMAT_MACROS' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DNDEBUG' \
	'-DNOMINMAX' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-std=c++2a \
	-Wall \
	-Wextra \
	-Wno-sign-compare \
	-Wno-unused-parameter \
	-Wno-missing-field-initializers \
	-Wno-cast-function-type \
	-O3 \
	-g \
	-pthread \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++17

INCS_Debug := \
	-I/root/.cache/node-gyp/19.9.0/include/node \
	-I/root/.cache/node-gyp/19.9.0/src \
	-I/root/.cache/node-gyp/19.9.0/deps/openssl/config \
	-I/root/.cache/node-gyp/19.9.0/deps/openssl/openssl/include \
	-I/root/.cache/node-gyp/19.9.0/deps/uv/include \
	-I/root/.cache/node-gyp/19.9.0/deps/zlib \
	-I/root/.cache/node-gyp/19.9.0/deps/v8/include \
	-I$(srcdir)/../nan \
	-I$(srcdir)/vendor/re2 \
	-I$(srcdir)/vendor/abseil-cpp

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=re2' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D__STDC_FORMAT_MACROS' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DNDEBUG' \
	'-DNOMINMAX' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-std=c++2a \
	-Wall \
	-Wextra \
	-Wno-sign-compare \
	-Wno-unused-parameter \
	-Wno-missing-field-initializers \
	-Wno-cast-function-type \
	-O3 \
	-g \
	-pthread \
	-O3 \
	-fno-omit-frame-pointer

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++17

INCS_Release := \
	-I/root/.cache/node-gyp/19.9.0/include/node \
	-I/root/.cache/node-gyp/19.9.0/src \
	-I/root/.cache/node-gyp/19.9.0/deps/openssl/config \
	-I/root/.cache/node-gyp/19.9.0/deps/openssl/openssl/include \
	-I/root/.cache/node-gyp/19.9.0/deps/uv/include \
	-I/root/.cache/node-gyp/19.9.0/deps/zlib \
	-I/root/.cache/node-gyp/19.9.0/deps/v8/include \
	-I$(srcdir)/../nan \
	-I$(srcdir)/vendor/re2 \
	-I$(srcdir)/vendor/abseil-cpp

OBJS := \
	$(obj).target/$(TARGET)/lib/addon.o \
	$(obj).target/$(TARGET)/lib/new.o \
	$(obj).target/$(TARGET)/lib/exec.o \
	$(obj).target/$(TARGET)/lib/test.o \
	$(obj).target/$(TARGET)/lib/match.o \
	$(obj).target/$(TARGET)/lib/replace.o \
	$(obj).target/$(TARGET)/lib/search.o \
	$(obj).target/$(TARGET)/lib/split.o \
	$(obj).target/$(TARGET)/lib/to_string.o \
	$(obj).target/$(TARGET)/lib/accessors.o \
	$(obj).target/$(TARGET)/lib/util.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/bitmap256.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/bitstate.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/compile.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/dfa.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/filtered_re2.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/mimics_pcre.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/nfa.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/onepass.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/parse.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/perl_groups.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/prefilter.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/prefilter_tree.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/prog.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/re2.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/regexp.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/set.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/simplify.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/tostring.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/unicode_casefold.o \
	$(obj).target/$(TARGET)/vendor/re2/re2/unicode_groups.o \
	$(obj).target/$(TARGET)/vendor/re2/util/pcre.o \
	$(obj).target/$(TARGET)/vendor/re2/util/rune.o \
	$(obj).target/$(TARGET)/vendor/re2/util/strutil.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/base/internal/cycleclock.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/base/internal/low_level_alloc.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/base/internal/raw_logging.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/base/internal/spinlock.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/base/internal/spinlock_wait.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/base/internal/sysinfo.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/base/internal/thread_identity.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/base/internal/throw_delegate.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/base/internal/unscaledcycleclock.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/debugging/internal/demangle.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/container/internal/raw_hash_set.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/debugging/internal/address_is_readable.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/debugging/internal/elf_mem_image.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/debugging/internal/vdso_support.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/debugging/stacktrace.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/debugging/symbolize.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/flags/commandlineflag.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/flags/flag.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/flags/internal/commandlineflag.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/flags/internal/flag.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/flags/internal/private_handle_accessor.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/flags/internal/program_name.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/flags/marshalling.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/flags/reflection.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/flags/usage_config.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/hash/internal/city.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/hash/internal/hash.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/hash/internal/low_level_hash.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/numeric/int128.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/ascii.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/charconv.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/internal/charconv_bigint.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/internal/charconv_parse.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/internal/memutil.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/internal/str_format/arg.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/internal/str_format/bind.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/internal/str_format/extension.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/internal/str_format/float_conversion.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/internal/str_format/output.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/internal/str_format/parser.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/match.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/numbers.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/str_cat.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/str_split.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/strings/string_view.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/synchronization/internal/create_thread_identity.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/synchronization/internal/graphcycles.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/synchronization/internal/futex_waiter.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/synchronization/internal/kernel_timeout.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/synchronization/internal/per_thread_sem.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/synchronization/internal/waiter_base.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/synchronization/mutex.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/clock.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/duration.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/internal/cctz/src/time_zone_fixed.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/internal/cctz/src/time_zone_if.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/internal/cctz/src/time_zone_impl.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/internal/cctz/src/time_zone_info.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/internal/cctz/src/time_zone_libc.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/internal/cctz/src/time_zone_lookup.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/internal/cctz/src/time_zone_posix.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/internal/cctz/src/zone_info_source.o \
	$(obj).target/$(TARGET)/vendor/abseil-cpp/absl/time/time.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic \
	-m64 \
	-pthread

LDFLAGS_Release := \
	-pthread \
	-rdynamic \
	-m64 \
	-pthread

LIBS :=

$(obj).target/re2.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/re2.node: LIBS := $(LIBS)
$(obj).target/re2.node: TOOLSET := $(TOOLSET)
$(obj).target/re2.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(obj).target/re2.node
# Add target alias
.PHONY: re2
re2: $(builddir)/re2.node

# Copy this to the executable output path.
$(builddir)/re2.node: TOOLSET := $(TOOLSET)
$(builddir)/re2.node: $(obj).target/re2.node FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/re2.node
# Short alias for building this executable.
.PHONY: re2.node
re2.node: $(obj).target/re2.node $(builddir)/re2.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/re2.node
